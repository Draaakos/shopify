from django.http import JsonResponse
from shopify_api.graphql.client import GraphQLClient
from .dto.product import transform_products_to_dto
from shopify_api.graphql.queries.product_queries import GET_PRODUCTS_QUERY



class ProductRepository:
    def __init__(self, client: GraphQLClient):
        self.client = client


    def get_products(self, first, after=None):
        variables = {"first": first, 'after': after}
        response = self.client.execute(GET_PRODUCTS_QUERY, variables)
        return response


    def get_products_per_page(self, page_number=1, page_size=8):
        after_cursor = None

        for current_page in range(1, page_number + 1):
            response = self.get_products(first=page_size, after=after_cursor)
            products_dto = transform_products_to_dto(response)

            if current_page == page_number:
                return products_dto

            page_info = response['data']['products']['pageInfo']
            if not page_info['hasNextPage']:
                return []
            after_cursor = page_info['endCursor']

        return []

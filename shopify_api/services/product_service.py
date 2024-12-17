from shopify_api.repositories.product_repository import ProductRepository


class ProductService:
    def __init__(self, product_repository: ProductRepository):
        self.product_repository = product_repository


    def fetch_products(self, page_number, page_size):
        response = self.product_repository.get_products_per_page(page_number, page_size)
        return response


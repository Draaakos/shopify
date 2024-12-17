# myapp/views/product_views.py
from django.http import JsonResponse
from shopify_api.graphql.client import GraphQLClient
from shopify_api.repositories.product_repository import ProductRepository
from shopify_api.services.product_service import ProductService


client = GraphQLClient()
product_repository = ProductRepository(client)
product_service = ProductService(product_repository)


def fetch_products(request):
    page_number = int(request.GET.get("page", 1))
    page_size = int(request.GET.get("page_size", 8))

    if request.method == "GET":
        try:
            products = product_service.fetch_products(page_number, page_size)
            return JsonResponse({"success": True, "products": products})
        except Exception as e:
            return JsonResponse({"success": False, "error": str(e)}, status=404)

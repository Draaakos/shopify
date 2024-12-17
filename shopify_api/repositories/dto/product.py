from dataclasses import dataclass, asdict
from typing import List, Dict

@dataclass
class ProductDTO:
    id: str
    title: str
    image_url: str
    price: str

def transform_products_to_dto(response: Dict) -> List[ProductDTO]:
    products = []
    for edge in response['data']['products']['edges']:
        node = edge['node']
        product = ProductDTO(
            id=node['id'],
            title=node['title'],
            image_url=node['images']['edges'][0]['node']['originalSrc'] if node['images']['edges'] else '',
            price=f"{node['priceRange']['minVariantPrice']['amount']} {node['priceRange']['minVariantPrice']['currencyCode']}"
        )
        products.append(asdict(product))
    return products

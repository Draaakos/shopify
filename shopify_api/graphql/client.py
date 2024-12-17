import requests
from decouple import config


ACCESS_TOKEN = config('ACCESS_TOKEN')
GRAPHQL_ENDPOINT = config('GRAPHQL_ENDPOINT')


class GraphQLClient:
    def __init__(self, endpoint = GRAPHQL_ENDPOINT, token = ACCESS_TOKEN):
        self.endpoint = endpoint
        self.headers = {
            "Content-Type": "application/json",
            "X-Shopify-Storefront-Access-Token": token,
        }

    def execute(self, query, variables=None):
        response = requests.post(
            self.endpoint,
            json={"query": query, "variables": variables},
            headers=self.headers,
        )
        response.raise_for_status()
        return response.json()

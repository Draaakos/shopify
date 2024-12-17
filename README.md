# Shopify Product Manager

Este proyecto es una aplicación **Django** que interactúa con la **API GraphQL de Shopify** para obtener productos, realizar paginación y exponerlos mediante endpoints REST.


## **Demo**

Puedes acceder al sitio activo en el siguiente enlace:

🟢 **Sitio en Vivo**: [shopify-beta-two.vercel.app](https://shopify-beta-two.vercel.app)


## **Características**

1. **Paginación de productos**:
   - Soporte para seleccionar la página y el tamaño de página desde parámetros de la URL.
   - Permite obtener los productos directamente por página de forma eficiente.

2. **Estructura limpia del repositorio**:
   - Uso de un repositorio de productos (`ProductRepository`) para obtener los productos disponibles en el test.
   - Transformación de datos en un formato DTO (Data Transfer Object).

3. **Endpoints REST**:
   - Exposición de un endpoint para recuperar productos con parámetros de paginación dinámicos.

---

## **Requisitos**

1. **Python** 3.8+
2. **Django** (última versión)
3. Acceso a la **Storefront API** de Shopify:
   - Debes obtener tu token de acceso: [Shopify Storefront API](https://shopify.dev/docs/api/storefront).

---

## **Instalación**

Clona el repositorio y configura el entorno virtual:

```bash
# Clona el repositorio
git clone https://github.com/Draaakos/shopify.git
cd shopify

# Crea un entorno virtual
python -m venv env
source env/bin/activate  # En Windows usa env\Scripts\activate

# Instala las dependencias
pip install -r requirements.txt
```

---

## **Configuración**

1. **Token de Shopify**:
   Configura tu token de acceso para la API en tu archivo de settings o donde inicialices `GraphQLClient`:

   ```python
   client = GraphQLClient(token="YOUR_SHOPIFY_ACCESS_TOKEN")
   ```

2. **Configuración de URLs**:
   Asegúrate de registrar tus endpoints REST en `urls.py`:

   ```python
   from django.urls import path
   from .views import fetch_products

   urlpatterns = [
       path("products", fetch_products, name="fetch_products"),
   ]
   ```

---

## **Uso**

Levanta el servidor de desarrollo de Django:

```bash
python manage.py runserver
```

### **Endpoints Disponibles**

- **Obtener productos paginados**:
   - URL: `/products`
   - Parámetros:
     - `page`: Número de página (por defecto, `1`).
     - `page_size`: Cantidad de productos por página (por defecto, `8`).

   **Ejemplo**:
   ```
   /products?page=1&page_size=8
   /products?page=2&page_size=7
   ```

   **Respuesta**:
   ```json
   {
     "products": [
       {"id": "12345", "title": "Producto 1"},
       {"id": "12346", "title": "Producto 2"}
     ],
     "page": 1,
     "page_size": 8
   }
   ```

---

## **Estructura del Proyecto**

```plaintext
shopify/
│
├── myapp/
│   ├── views.py             # Vistas Django
│   ├── repositories/        # Lógica de negocio (ProductRepository)
│   ├── dto/                 # Transformación de datos
│   ├── urls.py              # Configuración de rutas
│   ├── templates/           # (Opcional) Templates HTML
│
├── shopify_api/
│   ├── graphql/
│       ├── client.py        # Cliente GraphQL
│       ├── queries/         # Consultas GraphQL
│
├── manage.py
├── requirements.txt         # Dependencias
└── README.md                # Este archivo
```

---


## **Licencia**

Este proyecto está bajo la licencia **MIT**. Puedes consultarla [aquí](LICENSE).

---

## **Autor**

Proyecto creado y mantenido por [Draaakos](https://github.com/Draaakos).

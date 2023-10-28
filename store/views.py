from django.shortcuts import render, get_object_or_404

from .models import Category, Product

# Create your views here.

def product_all(request):
    products = Product.products.all()

    return render(request, 'store/home.html', {'products': products})

def product_detail(request, slug):
    product = get_object_or_404(Product, slug=slug, is_active=True)

    return render(request, 'store/products/product.html', {'product': product})

def category_list(request, category_slug):
    category = get_object_or_404(Category, slug=category_slug)
    products = Product.products.filter(category=category)
    return render(request, 'store/products/category.html', {'category': category, 'products': products})

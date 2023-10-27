from django.contrib import admin

from .models import Category, Product

# Register your models here.

@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ['name', 'slug']
    prepopulated_fields = {'slug': ('name',)}

@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = ['name', 'slug', 'price', 'is_active', 'created', 'updated']
    list_filter = ['is_active']
    list_editable = ['price', 'is_active']
    prepopulated_fields = {'slug': ('name',)}
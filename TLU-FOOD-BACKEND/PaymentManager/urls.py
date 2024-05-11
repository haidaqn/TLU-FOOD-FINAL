from django.urls import path
from .views import DashboardTotalFoodAPIView,DashboardOrderInDayAPIView,BillApiView,BillDetailApiView,DashboardAPIView,DashboardOrderInDayAPIView, DasboardRevenueAPIView,DashboardTotalRevenueAPIView,DashboardToltalOrderAPIView

urlpatterns = [
    path('bill',BillApiView.as_view(),name='bill'),
    path('detail-bill/<int:bill_id>',BillDetailApiView.as_view(),name='bill-detail'),
    path('dashboard-order-bill',DashboardAPIView.as_view(),name='bill'),
    path('totalUser',DasboardRevenueAPIView.as_view(),name='bill'),
    path('totalOrder',DashboardToltalOrderAPIView.as_view(),name='bill'),
    path('totalMoney',DashboardTotalRevenueAPIView.as_view(),name='bill'),
    path('dashboard-order-in-day',DashboardOrderInDayAPIView.as_view(),name='bill'),
    path('order-in-day',DashboardOrderInDayAPIView.as_view(),name='bill'),
    path('totalFood',DashboardTotalFoodAPIView.as_view(),name='bill'),
]

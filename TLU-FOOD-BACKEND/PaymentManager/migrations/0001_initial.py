# Generated by Django 5.0.2 on 2024-02-23 21:06

import django.db.models.deletion
import django.utils.timezone
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('ProductManager', '0001_initial'),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='BillEntity',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('create_date', models.DateTimeField(default=django.utils.timezone.now)),
                ('modified_date', models.DateTimeField(null=True)),
                ('finish_date', models.DateTimeField(null=True)),
                ('order_status', models.SmallIntegerField(choices=[(1, 'PENDING'), (2, 'PROCESSING'), (3, 'DELIVERED'), (4, 'CANCELED')], default=1)),
                ('total_amount', models.BigIntegerField()),
                ('finish_time', models.CharField(max_length=255)),
                ('ship_fee', models.IntegerField(default=0)),
                ('code', models.CharField(max_length=255)),
                ('note', models.CharField(max_length=255)),
                ('account_entity', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to=settings.AUTH_USER_MODEL)),
                ('create_by', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='bills_created', to=settings.AUTH_USER_MODEL)),
                ('modified_by', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='bills_modified', to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'db_table': 'bill_entity',
            },
        ),
        migrations.CreateModel(
            name='BillDetailEntity',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('quantity', models.IntegerField()),
                ('item_list', models.TextField(null=True)),
                ('food_entity', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='ProductManager.foodentity')),
                ('bill_entity', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='PaymentManager.billentity')),
            ],
            options={
                'db_table': 'bill_detail_entity',
            },
        ),
    ]
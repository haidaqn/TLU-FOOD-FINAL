from rest_framework import serializers
from .models import AccountEntity,VoucherEntity
from rest_framework import serializers
import re
from rest_framework.response import Response
from rest_framework import status
from datetime import datetime

class AccountEntitySerializer(serializers.ModelSerializer):
    role = serializers.SerializerMethodField()
    class Meta:
        model = AccountEntity
        fields = ['id', 'username', 'email', 'create_date', 'modified_date', 'status', 'account_name', 'img_user', 'sdt', 'role']

    def get_role(self, obj):
        if obj.is_superuser:
            return "ADMIN"
        else:
            return "CUSTOMER"
class AccountInfoSerializer(serializers.ModelSerializer):
    class Meta:
        model = AccountEntity
        fields = ['username', 'email', 'img_user', 'sdt']
   

class LoginSerializer(serializers.Serializer):
    username = serializers.CharField()
    password = serializers.CharField()

    def validate(self, attrs):
        username = attrs.get('username')
        password = attrs.get('password')

        if not username:
            raise serializers.ValidationError(detail="Không được bỏ trống mã sinh viên")

        if not password:
            raise serializers.ValidationError(detail="Không được bỏ trống mật khẩu")

        return attrs

class VoucherSerializer(serializers.ModelSerializer):
    create_by = serializers.CharField(default="ADMIN", required=False)
    create_date = serializers.DateTimeField(default=datetime.now, required=False)
    createAt = serializers.DateTimeField(source='create_date', read_only=True)

    class Meta:
        model = VoucherEntity
        fields = ['id', 'create_by', 'create_date', 'status', 'detail', 'expired', 'quantity', 'discount', 'title', 'code', 'createAt']

    def delete_multiple(self, ids):
        # Xóa các bản ghi dựa trên danh sách các id được cung cấp
        deleted_count, _ = VoucherEntity.objects.filter(id__in=ids).delete()
        return deleted_count


class UpdateUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = AccountEntity
        fields = ['email', 'account_name', 'sdt', 'img_user']
        

class RegisterSerializer(serializers.ModelSerializer):
    re_password = serializers.CharField(write_only=True)

    class Meta:
        model = AccountEntity
        fields = ('account_name', 'username', 'sdt', 'password', 're_password')
        extra_kwargs = {
            'password': {'write_only': True},
        }

    def validate_account_name(self, value):
        words = value.strip().split()
        # print(words)
        if len(words) < 2 or not all(re.match(r'^[a-zA-ZÀ-ỹ\s]+$', word) for word in words):
            raise serializers.ValidationError("Họ và tên gồm 2 từ trở lên chỉ bao gồm chữ cái")
        return value

    def validate_username(self, value):
        if len(value) != 6 or value[0] != 'A' or not value[1:].isdigit():
            raise serializers.ValidationError("Mã sinh viên không hợp lệ")
        return value

    def validate_sdt(self, value):
        phoneRegExp = r'^\d{9,11}$'
        if not re.match(phoneRegExp, value):
            raise serializers.ValidationError("Số điện thoại không hợp lệ")
        return value

    def validate_password(self, value):
        if len(value) < 8:
            raise serializers.ValidationError("Mật khẩu phải dài hơn 8 kí tự")
        if len(value) > 32:
            raise serializers.ValidationError("Mật khẩu quá dài")
        if not any(c.isupper() for c in value):
            raise serializers.ValidationError("Mật khẩu cần ít nhất 1 kí tự in hoa")
        if not any(c.islower() for c in value):
            raise serializers.ValidationError("Mật khẩu cần ít nhất 1 kí tự in thường")
        return value

    def validate_re_password(self, value):
        if value != self.initial_data.get('password'):
            raise serializers.ValidationError("Mật khẩu không khớp")
        return value

    def create(self, validated_data):
        validated_data.pop('re_password', None)
        return AccountEntity.objects.create_user(**validated_data)
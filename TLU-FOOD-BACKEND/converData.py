from datetime import datetime, timedelta

def convertStringToDate(date_string, date_format='%Y-%m-%d'):
    data = str(date_string).split(' ')[0]
    date_obj = datetime.strptime(data, date_format).date()
    date_final = '-'.join(str(date_obj).split('-')[::-1])
    return date_final
        

def converData30daysgago(data):
    result = {}
    
    for item in data:
        create_date = convertStringToDate(item['create_date'])
        total_amount = item['total_amount'] / 1000
        
        # Nếu ngày đã tồn tại trong từ điển, cộng thêm giá trị mới vào tổng giá trị
        if create_date in result:
            result[create_date] += total_amount
        else:
            result[create_date] = total_amount
    
    # Chuyển đổi từ từ điển thành danh sách kết quả cuối cùng
    final_result = {'date': list(result.keys()), 'value': list(result.values())}
    
    return final_result

def converFoodBestSeller(data):
    
    result = []
    
    for item in data:
        result.append({
            'id': item['id'],
            'value': item['quantityPurchased'],
            'label': item['foodName'],
            'img': item['imgFood'],
        })
        
    return result


def converOrderInDay(data):
    result = {}
    
    for item in data:
        create_date = convertStringToDate(item['create_date'])
        total_amount = item['total_amount'] 
        # Nếu ngày đã tồn tại trong từ điển, cộng thêm giá trị mới vào tổng giá trị
        if create_date in result:
            result[create_date] += total_amount
        else:
            result[create_date] = total_amount
            
    final_result = {'date': list(result.keys()), 'value': list(result.values())}
    
    return final_result


def converCustomerBestSeller(data):
    result = {
        'name': [],
        'value': [],
    }
    
    for item in data:
        result['name'].append(item['buyer_name'])
        result['value'].append(item['total_amount'])
    
    return result
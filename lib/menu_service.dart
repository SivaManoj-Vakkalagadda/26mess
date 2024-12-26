import 'dart:convert';
import 'package:http/http.dart' as http;

class MenuService {
  // Replace with your backend URL
  final String baseUrl = 'http://172.22.208.1:3000';

  Future<Map<String, dynamic>> getMenuForDay(String day) async {
    final response = await http.get(Uri.parse('$baseUrl/getMenuForDay/$day'));

    if (response.statusCode == 200) {
      return jsonDecode(response.body);
    } else {
      throw Exception('Failed to load menu');
    }
  }
}

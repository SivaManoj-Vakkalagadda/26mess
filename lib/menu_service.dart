import 'dart:convert';
import 'package:http/http.dart' as http;

class MenuService {
  // Replace with your Render API URL
  final String baseUrl = 'https://two6mess.onrender.com';  // Updated URL

  Future<Map<String, dynamic>> getMenuForDay(String day) async {
    final response = await http.get(Uri.parse('$baseUrl/getMenuForDay/$day'));

    if (response.statusCode == 200) {
      return jsonDecode(response.body);
    } else {
      throw Exception('Failed to load menu');
    }
  }
}

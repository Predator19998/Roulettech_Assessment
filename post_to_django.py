import json
import requests

def post_json_to_django(json_file_path, url, max_recipes=100):
    success_count = 0
    fail_count = 0

    with open(json_file_path, 'r', encoding='utf-8') as json_file:
        data = json.load(json_file)
    
    # Limit the number of recipes to post
    recipes_to_post = data[:max_recipes]

    for recipe in recipes_to_post:
        response = requests.post(url, json=recipe)
        
        if response.status_code == 201:
            success_count += 1
        else:
            fail_count += 1
            print(f"Failed to post: {recipe['name']}")
            print(f"Status code: {response.status_code}")
            print(response.json())
    
    print("\nFinal Report:")
    print(f"Total Successful Posts: {success_count}")
    print(f"Total Failed Posts: {fail_count}")

if __name__ == "__main__":
    json_file_path = 'output_recipes.json'  # Path to your JSON file
    url = 'http://localhost:8000/api/recipes/'  # Django server endpoint URL
    post_json_to_django(json_file_path, url)
import csv
import json

def csv_to_json(csv_file_path, json_file_path):
    recipes = []

    with open(csv_file_path, newline='', encoding='utf-8') as csvfile:
        reader = csv.DictReader(csvfile)
        for row in reader:
            recipe = {
                'name': row['name'],
                'minutes': int(row['minutes']),
                'nutrition': row['nutrition'],
                'steps': row['steps'],
                'description': row['description'],
                'ingredients': row['ingredients']
            }
            recipes.append(recipe)

    with open(json_file_path, 'w', encoding='utf-8') as jsonfile:
        json.dump(recipes, jsonfile, indent=4)

if __name__ == "__main__":
    csv_file_path = 'RAW_recipes.csv'
    json_file_path = 'output_recipes.json'
    csv_to_json(csv_file_path, json_file_path)
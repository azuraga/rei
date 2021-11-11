import json
import csv


def csv_to_json(filename):
    """
    Converts the CSV file of this project to an organised JSON file. Only considers messages and their author,
     thus fanart and timestamp are not included.
    """
    result = []
    with open('{}.csv'.format(filename), newline='\n') as file:
        reader = csv.reader(file, delimiter=',')
        for ix, row in enumerate(reader):
            if ix == 0:  # skip header
                continue
            result.append({
                'author': row[1],
                'message': {
                    'EN': row[2],
                    'JA': row[3]
                }
            })
    with open('{}.json'.format(filename), 'w') as file:
        json.dump({'content': result}, file, indent=4, ensure_ascii=False)


if __name__ == '__main__':
    csv_to_json('rei_messages')

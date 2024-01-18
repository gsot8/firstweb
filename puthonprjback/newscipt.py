import requests

r = requests.post("http://127.0.0.1:5000/rooms/create", json={"number": 201, "values": 30})
print(r.text)
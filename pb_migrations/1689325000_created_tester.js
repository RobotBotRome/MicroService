migrate((db) => {
  const collection = new Collection({
    "id": "yvw8lwlintyxnid",
    "created": "2023-07-14 08:56:40.469Z",
    "updated": "2023-07-14 08:56:40.469Z",
    "name": "tester",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "ka0wy0pj",
        "name": "testtest",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": "",
    "viewRule": "",
    "createRule": "",
    "updateRule": "",
    "deleteRule": "",
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("yvw8lwlintyxnid");

  return dao.deleteCollection(collection);
})

### Running using Docker

Build

```
docker build -t knesset-data-web-ui .
```

Run (replace DB_CREDENTIALS_FILE with path to the file you created)

```
docker run -it -p 3000:3000 knesset-data-web-ui
```

Frontend should be available at http://localhost:3000


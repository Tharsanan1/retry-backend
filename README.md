# Node.js Retry App

This is a simple Node.js application built with Express.js that provides a retry mechanism through the `/retry` endpoint. The app allows you to specify the number of retries before returning a successful response. Additionally, it includes other endpoints for managing the retry count and checking the health status.

## Requirements

- Node.js
- npm (Node Package Manager)

## Getting Started

1. Clone the repository or copy the code into your local project directory.

2. Install dependencies using npm:

```bash
npm install
```

3. Start the Node.js server:

```bash
node server.js
```

The server will be running at `http://localhost:3000`.

## Endpoints

### Retry Endpoint

#### `GET /retry`

This endpoint simulates an operation that might fail. It returns a `500` status code with the message "Something went wrong. Please retry." for the first `retryCount` attempts. After that, it returns a `200` status code with the message "Success!"

### Health Check Endpoint

#### `GET /health`

This endpoint is used for health checking purposes. It always returns a `200` status code with the message "Success!" and can be used to verify the health status of the application.

### Reset Endpoint

#### `POST /reset`

This endpoint allows you to reset the retry count to `0`. It returns a `200` status code with the message "Retry count reset."

### Set Retry Count Endpoint

#### `POST /set-retry-count`

This endpoint allows you to set the retry count to a specific value. It accepts a JSON payload with the desired retry count.

Example JSON Payload:

```json
{
  "count": 5
}
```

- `count`: The desired retry count (a non-negative integer).

If the provided `count` is a non-negative integer, the retry count will be updated accordingly, and the endpoint will return a `200` status code with the message "Retry count set to {count}". If the `count` is invalid, it will return a `400` status code with the message "Invalid retry count. Retry count must be a non-negative number."

## Note

This is a simplified example for demonstration purposes. In a real-world scenario, you may want to add more robust error handling, authentication, and other security features, especially if these endpoints are exposed to the public. Always ensure proper validation and error handling in production applications.
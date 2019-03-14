# Errors

<aside class="notice">
For a detailed description of each endpoint of our rest api, please [check out the reference documentation](https://firekast-doc.herokuapp.com/v2).
</aside>

## generic HTTP response error codes

**HTTP status code | meaning**

400 | Bad Request. The request is invalid.
409 | Invalid stream status. The current stream state forbids the request.
401 | Unauthorized. The [API key](#api-keys) is invalid.
500 | Internal Server Error. In the unlikely event of a such an error please contact [support@firekast.io](support@firekast.io).
504 | Try the operation again. It will be available shortly if not immediately.

enum HttpStatus {
    OK= "OK",
    CREATED= "CREATED",
    NOT_CONTENT= "NOT_CONTENT",
    NOT_FOUND = "NOT_FOUND",
    INTERNAL_SERVER = "INTERNAL_SERVER"
}

const httpInfo= {
    [HttpStatus.OK]: { value: 200, reason: "valor 200" },
    [HttpStatus.CREATED]: { value: 201, reason: "valor 201" },
    [HttpStatus.NOT_CONTENT]: { value: 204, reason: "valor 204" },
    [HttpStatus.NOT_FOUND]: { value: 404, reason: "valor 404" },
    [HttpStatus.INTERNAL_SERVER]: { value: 500, reason: "valor 500" }
};

export default httpInfo;
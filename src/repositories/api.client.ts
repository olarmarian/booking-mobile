export class ApiClient<T> {
  protected baseUrl: string;

  constructor(url: string) {
    this.baseUrl = url;
  }

  async request(
    url?: string,
    method: HttpMethod = HttpMethod.GET,
    headers?: HttpHeaders,
    body?: T
  ): Promise<T | T[] | void> {
    const params: HttpParams = {
      method,
      headers: headers || this.defaultHeaders,
      body,
    };

    const fetchUrl = url.includes("http")
      ? url
      : url
      ? `${this.baseUrl}/${url}`
      : this.baseUrl;

    return fetch(fetchUrl, params).then((response) => response.json());
  }

  private get defaultHeaders(): HttpHeaders {
    return {
      Accept: "application/json",
    };
  }
}

export interface HttpParams {
  method: HttpMethod;
  headers: HttpHeaders;
  body?: any;
}

export enum HttpMethod {
  GET = "GET",
  POST = "POST",
  PUT = "PUT",
  DELETE = "DELETE",
}

export interface HttpHeaders {
  Accept: string;
  [key: string]: string;
}

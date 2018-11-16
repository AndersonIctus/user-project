
export interface RestResponse<M> {
  page: { number:number, size:number, totalElements:number, totalPages: number},
  _embedded: any,
  _links: {
      profile:{href: string},
      search:{href: string},
      self:{href: string}
  }
}

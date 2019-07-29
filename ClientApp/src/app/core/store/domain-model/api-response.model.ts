export class ApiResponse<T> {
    data: T;
    status: number;
    message: string;
    constructor() {}
}

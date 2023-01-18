export const ok = (data: any) => ({
  statusCode: 200,
  message: data,
});

export const created = (data: any) => ({
  statusCode: 201,
  message: data,
});

export const badRequest = (message: string) => ({
  statusCode: 400,
  message: { message },
});
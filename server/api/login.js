export default async (event) => {
  const body = await readBody(event)
  const user = { name: body.username, email: 'some email', image: 'image' }
  return user
}
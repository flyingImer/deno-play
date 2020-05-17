const listener = Deno.listen({ port: 8081 });
console.log("listening on 0.0.0.0:8081");
for await (const conn of listener) {
    console.log({conn})
    Deno.copy(conn, conn);
}
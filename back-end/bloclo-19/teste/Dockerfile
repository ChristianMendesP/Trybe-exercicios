FROM nginx
COPY ./index.html /usr/share/nginx/html
EXPOSE 3000
ENV API_URL=http://localhost:8000/api/
WORKDIR /usr/share/nginx/html
RUN ls
ENTRYPOINT [ "/usr/sbin/nginx" ]
CMD [ "-g", "daemon off;" ]

# 1. definir uma imagem base
# 2. qual a versao da imagem base
# 3. criar a pasta do index.html
# 4. copiar esse index.html para dentro da imagemdefinir a porta
# 5. setar variaveis de ambiente que podem ser utilizadas no site
# 6. definir a pasta de trabalho que teremos na imagempasta que vai conter o site
# 7. subir o nginex para subir o site no ar
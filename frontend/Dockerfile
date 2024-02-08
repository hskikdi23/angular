FROM node:latest

WORKDIR /app

COPY entrypoint.sh .

RUN chmod 777 entrypoint.sh

#ENTRYPOINT [ "./entrypoint.sh" ]
#CMD 

#CMD ["npm, start"]
ENTRYPOINT ["./entrypoint.sh"]
#ENTRYPOINT ["tail", "-f", "/dev/null"]
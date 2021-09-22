FROM node:15.8.0
WORKDIR /usr/app
EXPOSE 3000
ENV PORT=300
ENV SUBMIT_URL=https://imc-hiring-test.azurewebsites.net/Contact/Save
CMD ["bash"]

FROM node:15.8.0
WORKDIR /usr/app
EXPOSE 3000
ENV PORT=3000
ENV SUBMIT_URL=https://imc-hiring-test.azurewebsites.net/Contact/Save
ENV NODE_ENV=production
COPY package.json /usr/app/package.json
COPY yarn.lock yarn.lock
RUN yarn install
COPY . /user/app
CMD ["bash"]

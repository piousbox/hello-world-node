FROM node:8
WORKDIR /opt/projects/hello-world-node
COPY . .
RUN npm install
EXPOSE 3000
CMD [ 'npm', 'run', 'start' ] 

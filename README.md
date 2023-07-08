# For learning purposes [DRAFT]

## Running the application

  <details>
    
  <summary> UI </summary>
  
  * UI is a cra. Run the application using `npm run start`. 
  Assuming everything goes well, your browser will be pointed to http://localhost:3000
  * UI has a json-server dependency which will start using the command `npm run json-server`.
  The json-server will run at http://localhost:8080
  * Once the backend server is up, you'll have to run the backend server instead of the json-server.
  
  </details>

  <details>
  
  <summary>Server</summary>

  * You can run the server on two environments using `npm run dev` and `npm run prod`.
  * By default, the server runs at port `8080`. To run it on a different port use the command `SERVER_PORT=8083 npm run prod`.

  </details>

  <details>
  
  <summary>Docker</summary>

  </details>

## Docs

  <details>
  
  <summary>UI</summary>

  </details>

  <details>
  
  <summary>Server</summary>

  </details>

  <details>
  
  <summary>Docker (MySQL and phpMyAdmin containers)</summary>
  
  #### Docker
  | Command | Description |
  | --- | --- |
  | `docker container ls` | List of all running docker containers |
  | `docker inspect {conatainer_name}` | Get all details of the container including its IP. |
  | `docker compose up` | Runs the containers in `docker-compose.yml` |

  #### MySQL

  | Command | Description |
  | --- | --- |
  | `docker pull mysql:{version}` | Pull the official docker image. Adding no `:{version}` would pull the latest version. |
  | `docker run -e MYSQL_ROOT_PASSWORD=password -d mysql` | `-e` -> flag for environment variables. `-d` -> Detached, the session would be running in the background. |
  
  #### phpMyAdmin

  | Command | Description |
  | --- | --- |
  | `docker run -p 8081:80 phpmyadmin` | `-p` -> port, map port `8081` of our system to port `80` of the container. |
  | `-e PMA_ARBITRARY=1` | Adding `PMA_ARBITRARY=1` is for the phpMyAdmin to. not make any asumptions about where the sql server is running |

  </details>
  
## Resources

  | Description | Links |
  | --- | --- |
  | Home of all docker images | https://hub.docker.com |
  | SQL setup in a docker container | https://www.youtube.com/watch?v=XMPYAouPLvo  |


  

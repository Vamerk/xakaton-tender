FROM maven:3.9.6-amazoncorretto-17 AS build  
COPY src /usr/src/app/src  
COPY pom.xml /usr/src/app  
RUN mvn -f /usr/src/app/pom.xml clean package -DskipTests

FROM amazoncorretto:17

WORKDIR /app

COPY --from=build /usr/src/app/target/*.jar /usr/app/server.jar

CMD ["java", "-jar", "/usr/app/server.jar"]
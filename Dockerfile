FROM node:14 AS development

RUN yarn global add gatsby-cli

WORKDIR /app
COPY package.json yarn.lock /app/
RUN yarn
COPY ./src /app/src
COPY ./static /app/static
COPY ./gatsby-config.js /app

CMD [ "gatsby", "develop" ]

FROM development AS builder

RUN gatsby build

FROM gatsbyjs/gatsby
COPY --from=builder /app/public /pub

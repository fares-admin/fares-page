FROM node:lts as dependencies
WORKDIR /fares-page
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

FROM node:lts as builder
WORKDIR /fares-page
COPY . .
COPY --from=dependencies /fares-page/node_modules ./node_modules
RUN yarn build

FROM node:lts as runner
WORKDIR /fares-page
ENV NODE_ENV production
# If you are using a custom next.config.js file, uncomment this line.
COPY --from=builder /fares-page/next.config.js ./
COPY --from=builder /fares-page/public ./public
COPY --from=builder /fares-page/.next ./.next
COPY --from=builder /fares-page/node_modules ./node_modules
COPY --from=builder /fares-page/package.json ./package.json

EXPOSE 3000
CMD ["yarn", "start"]
FROM ruby:2.6.10
RUN apt-get update -qq && apt-get install -y build-essential

WORKDIR /usr/src/app

COPY Gemfile Gemfile.lock ./


# Install gems
RUN bundle install

COPY ../api .

EXPOSE 4567

CMD ["ruby", "app.rb", "-o", "0.0.0.0"]
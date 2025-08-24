  ---
layout: page
title: posts | brainfucksec
---

<section>
    {% assign filtered_posts = site.posts | where_exp: "post", "post.hidden != true" | sort: "date" | reverse %}
    {% if filtered_posts.size > 0 %}

    {% capture currentyear %}{{ 'now' | date: "%Y" }}{% endcapture %}
    {% capture postyear %}{{ filtered_posts[0].date | date: '%Y' }}{% endcapture %}
    {% if currentyear == postyear %}
        <h3>This year's posts</h3>
    {% else %}
        <h3>{{ postyear }}</h3>
    {% endif %}

    <ul>
    {% for post in filtered_posts %}
        {% capture year %}{{ post.date | date: '%Y' }}{% endcapture %}

        <li><time>{{ post.date | date:"%d %b" }} - </time>
            <a href="{{ post.url | prepend: site.baseurl | replace: '//', '/' }}">{{ post.title }}</a>
        </li>

        {% if forloop.last == false %}
            {% assign nindex = forloop.index0 | plus: 1 %}
            {% assign nyear = filtered_posts[nindex].date | date: '%Y' %}
            {% if year != nyear %}
                </ul>
                <h3>{{ nyear }}</h3>
                <ul>
            {% endif %}
        {% endif %}
    {% endfor %}
    </ul>
    
    {% else %}
        <h3>No posts to display</h3>
    {% endif %}
</section>

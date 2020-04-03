# Estabelecimentos

{% for est in site.estabelecimentos %}

- [{{ est.Nome }}]({{ est.url }})

{% endfor %}

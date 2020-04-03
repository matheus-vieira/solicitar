# Estabelecimentos [Cadastre]({{ '/cadastro' | prepend: site.baseurl }})

{% for est in site.estabelecimentos %}

- [{{ est.nome }}]({{ est.url }})

{% endfor %}

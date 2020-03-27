# Seus dados

Aqui você deve informar seus dados para que o estabelecimento entre em contato.

Seus dados serão armazenados apenas neste computador e não serão disponibilizados.

Caso esteja utilizando um computador público recomenda-se utilizar o modo privado do navegador ou após a utilização limpar os dados do navegador.

environment {{ jekyll.environment }}

url {{ absolute_url }}

{% include contato/form.html %}

[Voltar]({{ '/' | prepend: site.baseurl }}) | [Selecione o estabelecimento]({{ '/estabelecimento' | prepend: site.baseurl }}){: #aProx }

{% include contato/scripts.html %}

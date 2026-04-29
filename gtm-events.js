// GTM Practice Site — dataLayer helper
// Ten plik inicjalizuje dataLayer i śledzi podstawowe zdarzenia

window.dataLayer = window.dataLayer || [];

// Page view z dodatkowymi danymi
dataLayer.push({
  'event': 'page_view_custom',
  'page_path': window.location.pathname,
  'page_title': document.title
});

// Śledzenie kliknięć w karty modeli
document.addEventListener('DOMContentLoaded', function() {
  // Model card clicks
  document.querySelectorAll('.model-card, .katalog-card a, a[data-model]').forEach(function(el) {
    el.addEventListener('click', function() {
      var model = this.dataset.model || this.querySelector('h3')?.textContent;
      if (model) {
        dataLayer.push({
          'event': 'model_card_click',
          'model_name': model
        });
      }
    });
  });
});

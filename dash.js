// LumoPay state — sample data only, stored locally in the visitor's browser.
(function () {
  var KEY = 'lumopay_balance';
  var DEFAULT_BALANCE = 1248.60;

  function getBalance() {
    var v = parseFloat(localStorage.getItem(KEY));
    return isNaN(v) ? DEFAULT_BALANCE : v;
  }
  function setBalance(v) {
    localStorage.setItem(KEY, String(v));
    render();
  }
  function fmt(v) {
    return '$' + v.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  }
  function render() {
    document.querySelectorAll('[data-balance]').forEach(function (el) {
      el.textContent = fmt(getBalance());
    });
  }
  var form = document.getElementById('send-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var amt = parseFloat(document.getElementById('send-amount').value);
      var to = document.getElementById('send-to').value.trim();
      var ok = document.getElementById('send-ok');
      if (!to || isNaN(amt) || amt <= 0) return;
      if (amt > getBalance()) {
        ok.hidden = false;
        ok.style.background = '#fdecec'; ok.style.borderColor = '#f3c2c2'; ok.style.color = '#8a1f1f';
        ok.textContent = 'That amount is above the available balance.';
        return;
      }
      setBalance(Math.round((getBalance() - amt) * 100) / 100);
      ok.hidden = false;
      ok.style.background = '#e6f4ec'; ok.style.borderColor = '#bfe3cd'; ok.style.color = '#075e33';
      ok.textContent = 'Sent ' + fmt(amt) + ' to ' + to + '.';
      form.reset();
    });
  }
  render();
})();

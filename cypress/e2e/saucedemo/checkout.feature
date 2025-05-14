Feature: Checkout - Sauce labs Backpack
  # Positive Case: Proses login, menambahkan produk, dan melakukan checkout
  Scenario: Login, add product and checkout
    # Buka halaman login Saucedemo
    Given I open the Saucedemo login page
    
    # Login dengan username "standard_user" dan password "secret_sauce"
    When I am log with username "standard_user" and password "secret_sauce"
    
    # Klik tombol login
    And I hit the login button
    
    # Pastikan diarahkan ke halaman inventory
    Then I have to be on the inventory page
    
    # Klik tombol Add to Cart untuk Sauce Labs Backpack
    When I tap on Add to Cart button for Sauce Labs Backpack
    
    # Verifikasi keranjang belanja menunjukkan 1 item
    Then Its a must to see 1 item in the cart
    
    # Klik ikon keranjang belanja
    When I access shopping cart icon
    
    # Verifikasi tombol checkout terlihat
    Then I should see the checkout button
    
    # Klik tombol checkout
    When I click on the checkout button
    
    # Pastikan berada di halaman form checkout
    Then I should be on checkout form page
    
    # Isi form checkout dengan nama depan "Reza", nama belakang "Paramarta", dan kode pos "123455"
    When I input form with First Name "Reza" Last Name "Paramarta" Zip Code "123455"
    
    # Verifikasi input form sesuai data yang diberikan
    Then I should ensure First Name as "Reza" Last Name as "Paramarta" Zip Code as "123455"
    
    # Klik tombol continue
    When I click continue button
    
    # Pastikan berada di halaman konfirmasi pesanan
    Then I should be on the order confirmation page
    
    # Verifikasi total harga yang ditampilkan adalah $32.39
    And I see price total of $32.39
    
    # Klik tombol finish untuk menyelesaikan pesanan
    When I click on the finish button
    
    # Verifikasi pesan sukses checkout terlihat
    Then I see success message checkout

  # Negative Case: Form checkout tidak terisi dengan lengkap
  Scenario: Checkout gagal karena First Name kosong
    # Buka halaman login dengan cara berbeda di negative case
    Given I navigate to the Saucedemo login page
    
    # Login dengan kredensial valid
    When I log in with username "standard_user" and password "secret_sauce"
    
    # Klik tombol login
    And I submit the login form
    
    # Pastikan berhasil masuk ke halaman inventory
    Then I should be on the inventory page
    
    # Tambahkan Sauce Labs Backpack ke keranjang
    When I add Sauce Labs Backpack to the cart
    
    # Verifikasi cart badge menunjukkan 1 item
    Then The cart should contain 1 item
    
    # Klik ikon keranjang belanja
    When I open the shopping cart
    
    # Verifikasi tombol checkout muncul (ubah kalimatnya)
    Then I should see the checkout button visible on the shopping cart page
    
    # Klik tombol checkout
    When I proceed to the checkout page
    
    # Pastikan berada di halaman form checkout
    Then I should be on the checkout form page
    
    # Isi form checkout dengan First Name kosong
    When I fill the checkout form with First Name "" Last Name "Paramarta" Zip Code "123455"
    
    # Klik tombol continue
    When I click the continue button
    
    # Verifikasi error muncul karena First Name kosong
    Then I should see error message "Error: First Name is required"

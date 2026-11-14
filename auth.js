import { createClient } from
  "https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm";

// ضع معلومات مشروعك هنا
const SUPABASE_URL = "https://mvxztvuanepshswpzryc.supabase.co";
const SUPABASE_KEY = "sb_publishable_Vrv5VQygcX4UuTR1wWc6TQ_NhcZCdWe";
const supabase = createClient(
  SUPABASE_URL,
  SUPABASE_KEY
);

const form = document.getElementById("loginForm");
const message = document.getElementById("message");
const title = document.querySelector(".auth-box h1");
const description = document.querySelector(".auth-box > p");
const register = document.querySelector(".register");

let signupMode = false;


// التبديل بين تسجيل الدخول وإنشاء الحساب

function toggleMode(e) {
    e.preventDefault();

    signupMode = !signupMode;

    title.textContent = signupMode
        ? "Create Account"
        : "Welcome Back!";

    description.textContent = signupMode
        ? "Join the FITZONE community"
        : "Login to your FITZONE account";

    form.querySelector("button").textContent = signupMode
        ? "CREATE ACCOUNT"
        : "LOGIN";

    register.innerHTML = signupMode
        ? 'Already have an account? <a href="#">Login</a>'
        : 'Don\'t have an account? <a href="#">Create Account</a>';

    message.textContent = "";
}

if (register && form && title && description && message) {
    register.addEventListener("click", (e) => {
        if (e.target.closest("a")) {
            toggleMode(e);
        }
    });
}


function toggleMode(e) {
  e.preventDefault();
  signupMode = !signupMode;

  title.textContent = signupMode ? "Create Account" : "Welcome Back!";
  description.textContent = signupMode
    ? "Join the FITZONE community"
    : "Login to your FITZONE account";

  form.querySelector("button").textContent = signupMode
    ? "CREATE ACCOUNT"
    : "LOGIN";

  register.innerHTML = signupMode
    ? 'Already have an account? <a href="#">Login</a>'
    : 'Don\'t have an account? <a href="#">Create Account</a>';

  message.textContent = "";
  register.querySelector("a").addEventListener("click", toggleMode);
}

// إنشاء الحساب أو تسجيل الدخول
form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;

  message.textContent = "Please wait...";

  try {
    if (signupMode) {
      const { data, error } = await supabase.auth.signUp({
        email,
        password
      });

      if (error) throw error;

      message.textContent = data.session
        ? "Account created successfully!"
        : "Check your email to confirm your account.";

    } else {
      const { data, error } =
        await supabase.auth.signInWithPassword({
          email,
          password
        });

      if (error) throw error;

      message.textContent = "Welcome to FITZONE!";

      setTimeout(() => {
        window.location.href = "home.html";
      }, 1200);
    }
  } catch (error) {
    message.textContent = error.message;
  }
});
const logoutBtn = document.getElementById("logout-btn");

if (logoutBtn) {
    logoutBtn.addEventListener("click", async function () {
        try {
            const { error } = await supabase.auth.signOut();

            if (error) {
                alert("Logout failed: " + error.message);
                return;
            }

            window.location.href = "login.html";

        } catch (err) {
            alert("Error: " + err.message);
        }
    });
}

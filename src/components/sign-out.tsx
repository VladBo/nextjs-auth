export function signOut() {
  // return (
  //   <form
  //     action={async (formData) => {
  //       "use server";
  //       await signOut("credentials", formData);
  //     }}
  //   >
  //     <label>
  //       Email
  //       <input name="email" type="email" />
  //     </label>
  //     <label>
  //       Password
  //       <input name="password" type="password" />
  //     </label>
  //     <button>Sign In</button>
  //   </form>
  // );
  return (
    <form
      action={async () => {
        "use server";
        await signOut();
      }}
    >
      <button type="submit">Sign out</button>
    </form>
  );
}

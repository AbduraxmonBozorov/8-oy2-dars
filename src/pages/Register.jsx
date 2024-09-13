import React, { useRef, useState } from "react";
import Header from "../components/Header";
import { useDispatch, useSelector } from "react-redux";
import { add, remove, edit } from "../redux/usersSlice";
import { useTranslation } from "react-i18next";
import Footer from "../components/Footer";

function Register() {
  const { t, i18n } = useTranslation();
  const nameRef = useRef("");
  const ageRef = useRef("");
  const editNameRef = useRef("");
  const editAgeRef = useRef("");
  const [editId, setEditId] = useState("");
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();
  //   console.log(users);

  function handleSubmit(e) {
    e.preventDefault();
    let user = {
      name: nameRef.current.value,
      age: ageRef.current.value,
      id: Date.now(),
    };

    dispatch(add(user));
    nameRef.current.value = "";
    ageRef.current.value = "";
    nameRef.current.focus();
  }

  function handleEdit(id) {
    let selectUser = users.find((user) => user.id === id);

    editNameRef.current.value = selectUser?.name;

    editAgeRef.current.value = selectUser.age;

    setEditId(selectUser.id);

    document.getElementById("my_modal_1").showModal();
  }

  function handleRemove(id) {
    dispatch(remove(id));
  }

  function handleCloseModal() {
    let user = {
      name: editNameRef.current.value,
      age: editAgeRef.current.value,
      id: editId,
    };

    dispatch(edit(user));
    editNameRef.current.value = "";
    editAgeRef.current.value = "";
    setEditId("");
    document.getElementById("my_modal_1").close();
  }

  return (
    <div>
      {/* Modal */}
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Edit user</h3>
          <div className="py-4 flex flex-col gap-5">
            <label>{t("Name")}</label>
            <input className="border py-2 px-3" type="text" ref={editNameRef} />
            <label>{t("Age")}</label>
            <input className="border py-2 px-3" type="text" ref={editAgeRef} />
          </div>
          <div className="modal-action">
            <button className="btn" onClick={handleCloseModal}>
              {t("Save")}
            </button>
          </div>
        </div>
      </dialog>
      {/* Main form */}

      <Header />
      <div className="register max-w-[1240px] mx-auto my-5">
        <form
          className="flex flex-row gap-5 items-center"
          onSubmit={handleSubmit}
        >
          <input
            ref={nameRef}
            type="text"
            className="px-4 py-3 rounded-lg outline-slate-500 border w-1/4"
            placeholder={t("Enter name")}
          />
          <input
            type="text"
            ref={ageRef}
            className="px-4 py-3 rounded-lg outline-slate-500 border w-1/4"
            placeholder={t("Enter age")}
          />
          <button className="btn btn-primary w-1/4">{t("Save")}</button>
        </form>
        <div className="wrapper my-10 grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {users.map((user, index) => (
            <div
              className="user flex flex-col gap-10 p-5 rounded shadow-md border"
              key={index}
            >
              <h2>{t("Name")}: {user.name}</h2>
              <h3>{t("Age")}: {user.age}</h3>
              <h2>id: {user.id}</h2>
              <div className="flex flex-row flex-wrap justify-between items-center">
                <button
                  className="btn btn-warning"
                  onClick={() => handleEdit(user.id)}
                >
                  {t('Edit')}
                </button>
                <button
                  className="btn btn-error"
                  onClick={() => handleRemove(user.id)}
                >
                  {t("Remove")}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Register;

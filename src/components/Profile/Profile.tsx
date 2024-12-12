import classes from './Profile.module.css';

const Profile = () => {
  const user = {
    firstName: 'Walter',
    lastName: 'White',
  };

  return (
    <div className={classes.profileCard}>
      <img
        className={classes.img}
        src="https://ionoto.ru/upload/medialibrary/a1f/tcs61nk83dig738gik8qtkcx6ue7sgek.png"
        alt="Профиль пользователя"
      />
      <p>
        {user.firstName} {user.lastName}
      </p>
    </div>
  );
};

export default Profile;

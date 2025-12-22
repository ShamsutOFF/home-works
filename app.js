const hasLicence = true;
const age = 18;
const isDrunk = true;

const canDrive = (hasLicence && age >= 18) && !isDrunk ? 'может' : 'не может';
export default objs => objs.reduce((r, o) => ({ ...r, ...o }), {});

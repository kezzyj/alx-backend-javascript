export default function createIteratorObject(report) {
  for (const department in report) {
    if (department) console.log(report[department]);
  }
}

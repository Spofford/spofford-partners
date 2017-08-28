export default function(){

  this.transition(
    this.fromRoute('index'),
    this.toRoute('pitch-deck'),
    this.use('fade'),
    this.reverse('fade')
  );
  this.transition(
    this.fromRoute('index'),
    this.toRoute('executive-summary'),
    this.use('fade'),
    this.reverse('fade')
  );
  this.transition(
    this.fromRoute('index'),
    this.toRoute('experiments'),
    this.use('fade'),
    this.reverse('fade')
  );
  this.transition(
    this.fromRoute('index'),
    this.toRoute('manufacturing-report'),
    this.use('fade'),
    this.reverse('fade')
  );

}
